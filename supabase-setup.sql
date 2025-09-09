-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create profiles table
CREATE TABLE public.profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  level integer DEFAULT 1,
  xp integer DEFAULT 0,
  streak integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create challenges table
CREATE TABLE public.challenges (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  language text CHECK (language IN ('Python', 'JavaScript')) NOT NULL,
  difficulty text CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')) NOT NULL,
  xp_reward integer NOT NULL DEFAULT 50,
  starter_code text NOT NULL,
  solution text NOT NULL,
  test_cases jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz DEFAULT now()
);

-- Create user_progress table
CREATE TABLE public.user_progress (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  challenge_id uuid REFERENCES public.challenges(id) ON DELETE CASCADE NOT NULL,
  completed boolean DEFAULT false,
  stars integer DEFAULT 0 CHECK (stars >= 0 AND stars <= 3),
  completion_date timestamptz,
  code_submitted text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, challenge_id)
);

-- Set up Row Level Security policies

-- Profiles policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Challenges policies (read-only for users)
ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Challenges are viewable by everyone" ON public.challenges
  FOR SELECT USING (true);

-- User progress policies
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.user_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.user_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile when user signs up
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert some sample challenges
INSERT INTO public.challenges (title, description, language, difficulty, xp_reward, starter_code, solution, test_cases) VALUES
('Hello World', 'Write a program that prints "Hello, World!" to the console', 'Python', 'Beginner', 25, 
'# Write your code here
', 
'print("Hello, World!")',
'[{"input": "", "expected": "Hello, World!"}]'),

('Variables and Input', 'Create a program that asks for the user''s name and greets them', 'Python', 'Beginner', 50,
'# Ask for user name and greet them
name = input("What is your name? ")
# Write your greeting here
',
'name = input("What is your name? ")
print(f"Hello, {name}!")',
'[{"input": "Alice", "expected": "Hello, Alice!"}]'),

('FizzBuzz', 'Write a program that prints numbers 1-15, but prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both', 'Python', 'Intermediate', 100,
'# Write your FizzBuzz program here
for i in range(1, 16):
    # Your code here
    pass
',
'for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)',
'[{"input": "", "expected": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz"}]'),

('JavaScript Basics', 'Create a function that takes two numbers and returns their sum', 'JavaScript', 'Beginner', 50,
'// Write a function that adds two numbers
function addNumbers(a, b) {
    // Your code here
}

// Test your function
console.log(addNumbers(5, 3));
',
'function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 3));',
'[{"input": "addNumbers(5, 3)", "expected": "8"}]'),

('Array Methods', 'Use JavaScript array methods to filter even numbers and double them', 'JavaScript', 'Intermediate', 75,
'// Given array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers and double them
const result = numbers
    // Your code here using filter and map
    
console.log(result);
',
'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2);
    
console.log(result);',
'[{"input": "", "expected": "[4, 8, 12, 16, 20]"}]');

-- Create indexes for better performance
CREATE INDEX idx_user_progress_user_id ON public.user_progress(user_id);
CREATE INDEX idx_user_progress_challenge_id ON public.user_progress(challenge_id);
CREATE INDEX idx_challenges_language ON public.challenges(language);
CREATE INDEX idx_challenges_difficulty ON public.challenges(difficulty);