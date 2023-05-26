# Special characters

| expression | Description |
|------------|-------------|
|   `.`         |        Match any character     |
|   `^`      |   Match line begin          |
|     `$`      |       Match line end |
|   `*`         |     Match previous RE 0 or more times greedily        |
|   `*?`         |     Match previous RE 0 or more times non-greedily        |
|   `+`         |     Match previous RE 1 or more times greedily        |
|   `+?`         |     Match previous RE 1 or more times non-greedily        |
|   `?`         |     Match previous RE 0 or 1 time greedily        |
|   `??`         |     Match previous RE 0 or 1 time non-greedily        |
|   <code>A&#124;B</code>         |     Match either RE A or B        |
|   `{m}`         |     Match previous RE exactly m times |
|   `{m,n}`         |     Match previous RE m to n times greedily|
|   `{m, n}?`         |     Match previous RE m to n times, no-greedily|

# Character set

| expression | Description |
|------------|-------------|
|       `[abc]`    |  Match either `a`, `b` or `c`          |
|       `[^abc]`    |  Match any character not in this set (i.e., not `a`, `b` and `c`)      |
|       `[a-z]`    |  Match the range from `a` to `z`          |
|       `[a-f2-8]`    |  Match the range from `a` to `z` or the range from `2` to `8`         |
| `[a\-z]`| Match `a`, `-` or `z` |
| `[a-]`| Match `a`, `-`|
| `[-a]`| Match `-`, `a`|
| `[-a]`| Match `-`, `a`|
|  <code>[{}*&#124;()[\]+\\^$.?]</code>  | Match either one of the chacters in <code>[]{}*&#124;()+\^$?.</code>|

* Note that you can also use [character class](#char_class) inside `[]`, for example, `[\w]` matches any character in `word` character class.

# <a name="char_class"></a>Character class

## "Multiple character" character class
An expression of the form `[[:name:]]` matches the named character class `name`.

| class name | Description |
|------------|-------------|
|   `alnum`       |       Any alpha-numeric character|
|   `alpha`       |       Any alphabetic character. |
| `digit` |Any decimal digit. |
|`xdigit`| Any hexadecimal digit character. |
| `lower` |Any lower case character. |
|`upper`|Any upper case character.|
| `cntrl` | Any control character[^1]. |
| `print` |Any printable character. |
| `punct` |Any punctuation character. [^2]|
| `space` |Any whitespace character. [^3]|
|`word`| Any word character (alphanumeric characters plus the underscore). |

## "Single character" character class

| class name | Description |
|------------|-------------|
|   `\d`       |   Equal to `[[:digit:]]`|
|   `\l`       |   Equal to `[[:lower:]]`|
|   `\u`       |   Equal to `[[:upper:]]`|
|   `\s`       |   Equal to `[[:space:]]`|
|   `\w`       |   Equal to `[[:word:]]`|
|   `\D`       |   Equal to `[^[:digit:]]`|
|   `\L`       |   Equal to `[^[:lower:]]`|
|   `\U`       |   Equal to `[^[:upper:]]`|
|   `\W`       |   Equal to `[^[:word:]]`|

# Regex groups
## Defining groups

| expression | Description |
|------------|-------------|
|   `(?<NAME>expression)`         |  Define a regex group named `NAME` which you can later refer to with `\g{NAME}`    |
|`(?=pattern)`|Positive lookahead, consumes zero characters, the preceding RE only matches if this matches |
|`(?=pattern)`|Positive lookahead, consumes zero characters, the preceding RE only matches if this matches |
|`(?<=pattern)`|Positive lookbehind, consumes zero characters, the following RE will only match if preceded with this fixed length RE. |
|`(?<!pattern)`|Negative lookbehind, consumes zero characters, the following RE will only match if not preceded with this fixed length RE. |

## Matching groups

| expression | Description |
|------------|-------------|
|   `\1`         |        Refer to first regex group     |
|   `\g{1}`      |   Refer to first regex group        |
|   `\g{12}`      |   Refer to 12th regex group        |
|   `\g{-1}`      |   Refer to last regex group        |
|   `\g{-2}`      |   Refer to last but one regex group        |

- The regex groups are indexed by the order of their opening braces.
- Note the `\g{NUM}` form allows for matching regex group index larger than 9, for example, `\g{12}`.

# Miscellaneous
## Escapes

| class name | Description |
|------------|-------------|
|`\xdd` | A hexadecimal escape sequence - matches the single character whose code point is `0xdd`.|
|`\x{dddd}` | A hexadecimal escape sequence - matches the single character whose code point is `0xdddd`.|

## Word boundaries

The following escape sequences match the boundaries of words:

| class name | Description |
|------------|-------------|
|`\<`| Matches the start of a word.|
|`\>` | Matches the end of a word.|
|`\b`|  Matches a word boundary (the start or end of a word).|
|`\B` |Matches only when not at a word boundary.|

# References

+ <https://www.boost.org/doc/libs/1_44_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html>
+ <http://docs.sublimetext.info/en/latest/search_and_replace/search_and_replace_overview.html>
+ <https://github.com/stajahlee/sublime-cheat-sheets/blob/master/cheat-sheets/Regular%20Expressions.cheatsheet>
+ [Character class](https://www.boost.org/doc/libs/1_44_0/libs/regex/doc/html/boost_regex/syntax/character_classes/std_char_clases.html)


[^1]: Control character explanation: https://en.wikipedia.org/wiki/Control_character

[^2]: There are 14 punctuation marks in English: https://grammar.yourdictionary.com/punctuation/what/fourteen-punctuation-marks.html

[^3]: For whitespace character, see https://en.wikipedia.org/wiki/Whitespace_character
