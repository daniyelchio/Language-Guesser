import { franc } from 'franc'
import langs from 'langs'
const input = process.argv[2];
const langCode = franc(input)

if (langCode == 'und') {
    console.log("Input not recognized, please try again");
} else {
    const language = langs.where("3", langCode);
    console.log(language.name);
}