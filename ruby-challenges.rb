# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# Create method called even_or_odd where any number can be input as a parameter
def even_or_odd (number)
# Create if statement that determines if input number is even (number % 2 == 0)
    if number % 2 == 0
# Use string interpolation to return statement if number is even
        "#{number} is even"
# Create else statement to catch any remaining number (will be odd)
    else
# Use string interpolation to return statement if number is odd
        "#{number} is odd"
    end
end

# Run code with provided variables as arguments to determine code accuracy
p even_or_odd(num1)
# 7 is odd
p even_or_odd(num2)
# 42 is even
p even_or_odd(num3)
# 221 is odd

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Create method called remove_vowel where any string can be input as a parameter
def remove_vowel (string)
# Create logic (use .delete) that will remove all vowels from input string
    string.delete("AaEeIiOoUu")
end

# Run code with provided variables as arguments to determine code accuracy
p remove_vowel(beatles_album1)
# Rbbr Sl
p remove_vowel(beatles_album2)
# Sgt Pppr
p remove_vowel(beatles_album3)
# bby Rd

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Create method called palindrome where any string that can be input as parameter
def palindrome (string)
# Create if statment that checks if string is equal to itself in reverse (since capitalization can return a false negative, use .downcase to make sure string is accurately read)
    if string.downcase == string.downcase.reverse
# Use string interpolation to return the string is a palindrome
        "#{string} is a palindrome"
# Create else statement to catch any other string (won't be a palindrome)
    else 
# Use string interpolation to return the string as not being a palindrome
        "#{string} is not a palindrome"
    end
end

# Run code with provided variables as arguments to determine code accuracy
p palindrome(palindrome_tester1)
# Racecar is a palindrome
p palindrome(palindrome_tester2)
# LEARN is not a palindrome
p palindrome(palindrome_tester3)
# Rotator is a palindrome