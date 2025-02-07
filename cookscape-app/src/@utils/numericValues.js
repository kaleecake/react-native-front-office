export function numericValues(text, onChangeNumber){
    const allowedValues = text.replace(/[^0-9]/g, "" );
    onChangeNumber(allowedValues);
}