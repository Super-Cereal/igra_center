/*
    Если значение модификатора интерпретируется как true, то добавляется класс с ключом этого модификатором
    Кроме того, если значение модификатора не является bool типом, то в класс так же добавляется значение этого модификатора:

    bem("participant")("button", { disabled: true, pending: false, type: "machine" }) ->
        "participant__button participant__button_disabled participant__button_type_machine"
    
    Таким образом с каждым активным модификатором добавляется по одному классу
*/
export const bem = (root: string) => (block?: string, modificators?: any) => {
    // тут только есть баг, что модификаторы не смогут случится, если не передан block

    if (!block) {
        return root;
    }

    const prefix = `${root}__${block}`;

    if (!modificators) {
        return prefix;
    }

    let resultString = prefix;

    for (let mod of Object.keys(modificators)) {
        const modValue = modificators[mod];

        if (modValue) {
            resultString += ` ${prefix}_${mod}`;

            if (typeof modValue !== 'boolean') {
                resultString += `_${modValue}`;
            }
        }
    }

    return resultString;
};
