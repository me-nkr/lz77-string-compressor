import chalk from 'chalk'

export default (data, start, sep, end, spotStart, spot) => {
    let pointer = ''
    let top = ''
    let middle = ''
    let bottom = ''
    let indicator = ''
    data.forEach((char, index, data) => {

        char ||= '\xf8';

        let color;
        if (index < start) color = chalk.white;
        else if (index >= start && index < sep) color = chalk.yellow;
        else if (index >= sep && index < end) color = chalk.green;
        else color = chalk.white;

        if (index === spotStart) pointer += '  ▼ ';
        else pointer += '    ';
        top += color('----');
        middle += color('| ' + char + ' ');
        bottom += color('----');
        if (index === spot) indicator += '  ▲ ';
        else indicator += '    ';

        if (index === data.length - 1) {
            pointer += ' ';
            top += color('-');
            middle += color('|');
            bottom += color('-');
            indicator += ' ';
        }
    })

    console.log(pointer);
    console.log(top);
    console.log(middle);
    console.log(bottom);
    console.log(indicator);
    console.log()
}