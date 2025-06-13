


import {
  clang,
  cpplang,
  jslang,
  python,
} from "../assets";

// Language icons + templates
export const icons = [
  {
    id: "0",
    title: "C",
    icon: clang,
    width: 34,
    height: 34,
    language: "c",
    filename: "main.c",
    template: `#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
`,
  },
  {
    id: "1",
    title: "C++",
    icon: cpplang,
    width: 34,
    height: 34,
    language: "cpp",
    filename: "main.cpp",
    template: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
`,
  },
  {
    id: "2",
    title: "JavaScript",
    icon: jslang,
    width: 34,
    height: 34,
    language: "javascript",
    filename: "main.js",
    template: `console.log("Hello, World!");
`,
  },
  {
    id: "4",
    title: "Python",
    icon: python,
    width: 34,
    height: 34,
    language: "python",
    filename: "main.py",
    template: `print("Hello, World!")
`,
  }
];
