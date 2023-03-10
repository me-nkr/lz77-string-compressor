# **LZ77 String Compressor**

> LZ77 is a lossless data compression algorithms published in papers by Abraham Lempel and Jacob Ziv in 1977.\
>\- [wikipedia](https://en.wikipedia.org/wiki/LZ77_and_LZ78#cite_note-1:~:text=LZ77%20and%20LZ78%20are%20the%20two%20lossless%20data%20compression%20algorithms%20published%20in%20papers%20by%20Abraham%20Lempel%20and%20Jacob%20Ziv%20in%201977%5B1%5D%20and%201978)

## **Usage**

### **Compressing**
First of all clone the repository using `git clone https://github.com/me-nkr/lz77-string-compressor.git`


You can use the compress a string using the `compress` script. You can execute the sript in 2 ways and the script has two modes.

### **Modes**
- **Normal Mode** - executed using `./compress`
    - you can either pass an argument to the script like `./compress 'repeating data repeat'`
    - or you can just run `./compress` and type your string in the `stdin`
    - or you can pipe data like `echo 'hello hello' | ./compress`
    - or redirect a file like `./compress < test.txt`
- **Debug Mode** - executed using `./compress -d`
    - you can only pass input as an argument in this mode like `./compress -d 'hello hello'`
    - this mode has a 13 character limit
    - this mode will print an step by step illustration of how the algorithm works with sliding window

## **Notes**
- This algorithm uses a sliding window to find the longest matching sequence from earlier characters.
- Instead of the sliding window with a serach buffer and look buffer of size more than one, this implementations
    uses a sliding window which has a search buffer of size more than one and a look buffer of size one.
- In this implementation the sliding window moves back and forth untill the match checking reaches the
    first cell of the sliding window.
- Which means it will make sure the longest sequence possible present in the serach buffer is used
- This presents a problem, it will consume more time
    - Sometimes going to the very start of the search buffer might not give a longer sequence
        that what is already obtained.
- Every sequece is encoded in the following format `<d,l,c>`, where
    - `d` - distance to move back to reach the start of the matched sequece
    - `l` - lenght of the matched sequence
    - `c` - next character after the match

## **Visualization**
Here is a visualization of compressing the string `hello hello`
- Yellow is search buffer
- Green is look buffer

![Demo](./demo.png)