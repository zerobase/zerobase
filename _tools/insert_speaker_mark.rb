#!/usr/env ruby

#-----------------
# Usage
#
# Input: 
# 
# 1: 本日のIA Podcastは、ゲストにAさんをお迎えしました。よろしくお願いします。
# 2: 
# 3: よろしくお願いします。
# 4: 
# 5: さて、元気ですか？
# 6: 
# 7: はい、元気です。
# 
# Output:
# 
# 1: [石橋] 本日のIA Podcastは、ゲストにAさんをお迎えしました。よろしくお願いします。
# 2: 
# 3: [A] よろしくお願いします。
# 4: 
# 5: [石橋] さて、元気ですか？
# 6: 
# 7: [A] はい、元気です。

line_no = 0
line_heading_table = ['[石橋] ', '[A] ']

while line = gets
  if $. % 2 == 1
    speaker_index = ($.-1)/2 % 2
    line_heading = line_heading_table[speaker_index]
    print line_heading, line
  else
    print line
  end
end
