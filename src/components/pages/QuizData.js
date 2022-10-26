const data = [
    {
        question: 'Who invented Java Programming?',
        options: [
            { opt: 'Guido van Rossum', ans: false },
            { opt: 'James Gosling', ans: true },
            { opt: 'Dennis Ritchie', ans: false },
            { opt: 'Bjarne Stroustrup', ans: false }
        ]
    },

    {
        question: 'Which statement is true about Java? ',
        options: [
            { opt: 'Java is a sequence-dependent programming language', ans: false },
            { opt: 'Java is a code dependent programming language', ans: false },
            { opt: 'Java is a platform-dependent programming language', ans: false },
            { opt: 'Java is a platform-independent programming language', ans: true }
        ]
    },

    {
        question: 'Which component is used to compile, debug and execute the java programs?',
        options: [
            { opt: 'JRE', ans: true },
            { opt: 'JIT', ans: false },
            { opt: 'JDK', ans: false },
            { opt: 'JVM', ans: false }
        ]
    },
    {
        question: 'Which one of the following is not a Java feature?',
        options: [
            { opt: 'Object-oriented', ans: false },
            { opt: 'Use of pointers', ans: true },
            { opt: 'Portable', ans: false },
            { opt: 'Dynamic and Extensible', ans: false }
        ]
    },
    {
        question: 'Which of these cannot be used for a variable name in Java?',
        options: [
            { opt: 'identifier & keyword', ans: false },
            { opt: 'identifier', ans: false },
            { opt: 'keyword', ans: true },
            { opt: 'none of the mentioned', ans: false }
        ]
    },
    {
        question: 'What is the extension of java code files?',
        options: [
            { opt: '.js', ans: false },
            { opt: '.txt', ans: false },
            { opt: '.class', ans: false },
            { opt: '.java', ans: true }
        ]
    },
    {
        question: 'Which of the following is not an OOPS concept in Java?',
        options: [
            { opt: 'Polymorphism', ans: false },
            { opt: 'Inheritance', ans: false },
            { opt: 'Compilation', ans: true },
            { opt: 'Encapsulation', ans: false }
        ]
    },
    {
        question: 'What is the extension of compiled java classes?',
        options: [
            { opt: '.txt', ans: false },
            { opt: '.js', ans: false },
            { opt: '.class', ans: true },
            { opt: '.java', ans: false }
        ]
    },
    {
        question: 'Which one of the following is not an access modifier?',
        options: [
            { opt: 'Protected', ans: false },
            { opt: 'Void', ans: true },
            { opt: 'Public', ans: false },
            { opt: 'Private', ans: false }
        ]
    },
    {
        question: 'Number of primitive data types in Java are?',
        options: [
            { opt: '6', ans: false },
            { opt: '7', ans: false },
            { opt: '8', ans: true },
            { opt: '9', ans: false }
        ]
    },
    {
        question: 'Automatic type conversion is possible in which of the possible cases?',
        options: [
            { opt: 'Byte to int', ans: false },
            { opt: 'Int to long', ans: true },
            { opt: 'Long to int', ans: false },
            { opt: 'Short to int', ans: false }
        ]
    },
    {
        question: 'What does the expression float a = 35 / 0 return?',
        options: [
            { opt: '0', ans: false },
            { opt: 'Not a Number', ans: false },
            { opt: 'Infinity', ans: true },
            { opt: 'Run time exception', ans: false }
        ]
    },
    {
        question: 'JDK stands for ____',
        options: [
            { opt: 'Java development kit', ans: true },
            { opt: 'Java deployment kit', ans: false },
            { opt: 'JavaScript deployment kit', ans: false },
            { opt: 'JNone of theseVM', ans: false }
        ]
    },
    {
        question: 'What makes the Java platform independent?',
        options: [
            { opt: 'Advanced programming language', ans: false },
            { opt: 'It uses bytecode for execution', ans: true },
            { opt: 'Class compilation', ans: false },
            { opt: 'All of these', ans: false }
        ]
    },
    {
        question: 'Can we keep a different name for the java class name and java file name?',
        options: [
            { opt: 'yes', ans: false },
            { opt: 'NO', ans: true }
        ]
    },
    {
        question: 'Which keyword in java is used for exception handling?',
        options: [
            { opt: 'exep', ans: true },
            { opt: 'excepHand', ans: false },
            { opt: 'throw', ans: false },
            { opt: 'All of these', ans: false }
        ]
    },
    {
        question: 'Method used to take a string as input in Java?',
        options: [
            { opt: 'next()', ans: false },
            { opt: 'nextLine()', ans: false },
            { opt: 'Both A. and B.', ans: true },
            { opt: 'None of these', ans: false }
        ]
    },
    {
        question: 'Which of the following is the correct syntax to create a variable in Java?',
        options: [
            { opt: 'var name;', ans: false },
            { opt: 'int name;', ans: true },
            { opt: 'var name int;', ans: false },
            { opt: 'All of these', ans: false }
        ]
    },   {
        question: 'The break statement in Java is used to ___.',
        options: [
            { opt: 'Terminates from the loop immediately', ans: true },
            { opt: 'Terminates from the program immediately', ans: false },
            { opt: 'Skips the current iteration', ans: false },
            { opt: 'All of these', ans: false }
        ]
    },
    {
        question: 'Array in java is ___',
        options: [
            { opt: 'Collection of similar elements', ans: true },
            { opt: 'Collection of elements of different types', ans: false },
            { opt: 'The data type of consisting of characters', ans: false },
            { opt: 'None of these', ans: false }
        ]
    },
    {
        question: 'Object in java are ___',
        options: [
            { opt: 'Classes', ans: false },
            { opt: 'References', ans: true },
            { opt: 'Iterators', ans: false },
            { opt: 'None of these', ans: false }
        ]
    },
    {
        question: ' What is garbage collection in java?',
        options: [
            { opt: 'Method to manage memory in java', ans: true },
            { opt: 'Create new garbage values', ans: false },
            { opt: 'Delete all values', ans: false },
            { opt: 'All of these', ans: false }
        ]
    },
    {
        question: 'Wrapper class in java is ___',
        options: [
            { opt: 'Used to encapsulate primitive data types', ans: true },
            { opt: 'Declare new classes called wrapper', ans: false },
            { opt: 'Create a new instance of the class', ans: false },
            { opt: 'None of these', ans: false }
        ]
    },
    {
        question: 'What is stringBuffer in java?',
        options: [
            { opt: 'Class to create a string array', ans: false },
            { opt: 'Class to create a mutable string in java', ans: true },
            { opt: 'Class to create a string from i/o buffer', ans: false },
            { opt: 'All of these', ans: false }
        ]
    },
    {
        question: 'Encapsulation is ___',
        options: [
            { opt: 'Wrapping up of data and related functions into a single entity', ans: true },
            { opt: 'Creating special methods', ans: false },
            { opt: 'Creating special data structure', ans: false },
            { opt: 'All of these', ans: false }
        ]
    },


]

export default data;