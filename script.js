function calculateNames() {
    const personName = document.getElementById('personName').value;
    let totalValue = 0;

    // قيم عناصر الطبيعة
    let fireTotal = 0;
    let earthTotal = 0;
    let airTotal = 0;
    let waterTotal = 0;

    // قيمة الحروف وعناصر الطبيعة
    const valuesList = document.getElementById('valuesList');
    valuesList.innerHTML = '';

    for (let i = personName.length - 1; i >= 0; i--) {
        const char = personName[i];
        const value = getCharacterValue(char);
        const element = getCharacterElement(char);

        totalValue += value;

        // جمع القيم العددية لكل عنصر من عناصر الطبيعة
        switch (element) {
            case 'نار':
                fireTotal += value;
                break;
            case 'تراب':
                earthTotal += value;
                break;
            case 'هواء':
                airTotal += value;
                break;
            case 'ماء':
                waterTotal += value;
                break;
            default:
                break;
        }

     // إنشاء عنصر لعرض قيمة الحرف وعنصر الطبيعة

    }

    // عرض النتائج النهائية
 
    document.getElementById('fireResult').innerText = `نار: ${fireTotal}`;
    document.getElementById('earthResult').innerText = `تراب: ${earthTotal}`;
    document.getElementById('airResult').innerText = `هواء: ${airTotal}`;
    document.getElementById('waterResult').innerText = `ماء: ${waterTotal}`;
}
document.getElementById('finalResult').innerText = `ناتج الحساب النهائي: ${finalResult}`;


function getCharacterElement(char) {
    const elements = {
        'أ': 'نار', 'ا': 'نار', 'ب': 'تراب', 'ج': 'هواء', 'د': 'ماء',
        'ه': 'نار', 'و': 'تراب', 'ز': 'هواء', 'ح': 'ماء', 'ط': 'نار',
        'ي': 'تراب', 'ك': 'هواء', 'ل': 'ماء', 'م': 'نار', 'ن': 'تراب',
        'س': 'هواء', 'ع': 'ماء', 'ف': 'نار', 'ص': 'تراب', 'ق': 'هواء',
        'ر': 'ماء', 'ش': 'نار', 'ت': 'تراب', 'ث': 'هواء', 'خ': 'ماء',
        'ذ': 'نار', 'ض': 'تراب', 'ظ': 'هواء', 'غ': 'ماء'
    };

    return elements[char] || '';
}


function resetFields() {
    document.getElementById('personName').value = '';
    document.getElementById('result').innerText= '';
    document.getElementById('valuesList').innerHTML = '';
}

function getCharacterValue(char) {
    const values = {
        'أ': 7, 'ا': 7, 'ب': 7, 'ج': 7, 'د': 7, 'ه': 6, 'و': 6, 'ز': 6, 'ح': 6,
        'ط': 5, 'ي': 5, 'ك': 5, 'ل': 5, 'م': 4, 'ن': 4, 'س': 4, 'ع': 4,
        'ف': 3, 'ص': 3, 'ق': 3, 'ر': 3, 'ش': 2, 'ت': 2, 'ث': 2, 'خ': 2,
        'ذ': 1, 'ض': 1, 'ظ': 1, 'غ': 1
    };

    return values[char] || 0;
}

// الكود السابق

function resetFields() {
    // إعادة تهيئة الحقول
    document.getElementById('personName').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('valuesList').innerHTML = '';
    document.getElementById('fireResult').innerText = '';
    document.getElementById('earthResult').innerText = '';
    document.getElementById('airResult').innerText = '';
    document.getElementById('waterResult').innerText = '';
}

// الكود السابق