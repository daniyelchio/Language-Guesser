import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

const input = process.argv[2];
const langCode = franc(input)

if (langCode == 'und') {
    console.log("Input not recognized, please try again".red);
} else {
    const language = langs.where("3", langCode);
    console.log(`This language is most likely: ${language.name}`.cyan);
}