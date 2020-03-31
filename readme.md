4. Imagine the String() constructor didn't exist. Create a constructor function MyString() that acts like String() as closely as possible. You're not allowed to use any built-in string methods or properties, and remember that String() doesn't exist. You can use this code to test your constructor:

> > > var s = new MyString('hello');

> > > s.length;

> > > 5

> > > s[0];

> > > "h"

> > > s.toString();

> > > "hello"

> > > s.valueOf();

> > > "hello"

> > > s.charAt(1);

> > > "e"

> > > s.charAt('2');

> > > "l"

> > > s.charAt('e');

> > > "h"

> > > s.concat(' world!');

> > > "hello world!"

> > > s.slice(1,3);

> > > "el"

> > > s.slice(0,-1);

> > > "hell"

> > > s.split('e');

> > > ["h", "llo"]

> > > s.split('l');

> > > ["he", "", "o"]

5. Update your MyString() constructor to include a reverse()method.
