def count_words_and_vowels(filename="file1.txt"):
    vowels_set = "aeiouAEIOU"
    vowel_count = 0
    word_count = 0
    
    try:
        with open(filename, 'r') as file:
            content = file.read()
            
            # Count words by splitting the content at whitespaces
            words = content.split()
            word_count = len(words)
            
            # Count vowels by iterating through each character
            for char in content:
                if char in vowels_set:
                    vowel_count += 1
                    
        print(f"File Analysis for '{filename}':")
        
        print(f"Total Words: {word_count}")
        print(f"Total Vowels: {vowel_count}")
        
    except FileNotFoundError:
        print(f"Error: Could not find the file named '{filename}'.")

# Example usage (ensure file1.txt exists before running):
# count_words_and_vowels("file1.txt")