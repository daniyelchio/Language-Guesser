import { franc } from 'franc';
const langs = import('langs');

const input = process.argv[2];
const code = franc(input);
const language = langs.where("3", code);

console.log(language.name);