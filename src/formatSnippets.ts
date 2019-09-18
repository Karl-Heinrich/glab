export const dashedLine = () => {
    console.log('----------------------');
}

export const emptyLine = () => {
    console.log();
}

export const printSorroundedWithDashes = (text: string) => {

    let dashes = '';

    for (let i = 0; i < text.length; i++) {
       dashes += '-';
    }

    console.log(dashes);
    console.log(text);
    console.log(dashes);
}
