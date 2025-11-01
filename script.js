const translations = {
    en: {
        title: 'Feedback Template Generator',
        generatedFeedback: 'Generated Feedback',
        copyButton: 'Copy to Clipboard',
        copied: 'Copied!',
        copiedError: 'No comments! Nothing copied.',
        language: 'Language',
        category: 'Assessment',
        categories: {
            resubmission: 'Written resubmission',
            failed: 'New retake / failed written resubmission',
            passed: 'Passed'
        }
    },
    sv: {
        title: 'Generator för feedbackmallar',
        generatedFeedback: 'Genererad feedback',
        copyButton: 'Kopiera till urklipp',
        copied: 'Kopierat!',
        copiedError: 'Inga kommentarer! Inget är kopierat.',
        language: 'Språk',
        category: 'Bedömning',
        categories: {
            resubmission: 'Skriftlig komplettering',
            failed: 'Ny omtentamen / underkänd skriftlig komplettering',
            passed: 'Godkänd inlämning'
        }
    }
};

const templates = {
    en: {
        resubmission: {
            text: `Assessment: Written Resubmission
Deadline for resubmission: {deadline}

To achieve a passing grade, you need to submit a resubmission that includes: 
All files that are part of the assignment must be resubmitted together in the same submission (even if only one file has been changed or supplemented).

{codeComments}
{diagramComments}
{reportComments}

The list of resubmissions above only includes the issues identified during the oral presentation. This does not mean there can’t be other things that also need to be corrected. New errors can occur when new code is implemented, so it is important to check and ensure that all requirements are included in the submission and that it has been properly tested.
The resubmission must be submitted no later than two working days after you completed your presentation or received feedback from the teacher/assistant. If you submit your resubmission later than this, you will need to book a new presentation time and redo the presentation at the next resit opportunity. If your resubmission cannot be approved, you will also need to book a new presentation time at the next resit opportunity. For dates regarding resit opportunities, please refer to the assignment instructions, course schedule, or announcements on Canvas.`,
            fields: [
                { id: 'deadline', label: 'Deadline Date', type: 'date', required: true },
                { id: 'codeComments', label: 'Code Comments', type: 'textarea'},
                { id: 'diagramComments', label: 'Diagram Comments', type: 'textarea'},
                { id: 'reportComments', label: 'Report Comments', type: 'textarea'}
            ]
        },
        failed: {
            text: `Assessment: Resit – New oral presentation required
For dates regarding resit opportunities, please refer to the assignment instructions, course schedule, or announcements on Canvas.

Things to consider before the resit and previously identified corrections: 
All files that are part of the assignment must be resubmitted together in the same submission (even if only one file has been changed or supplemented).

{codeComments}
{diagramComments}
{reportComments}

The list of resubmissions above only includes the issues identified during the {feedbackType}. This does not mean there can’t be other things that also need to be corrected. New errors can occur when new code is implemented, so it is important to check and ensure that all requirements are included in the submission and that it has been properly tested.
It is important to come well prepared for the oral presentation. This does not only mean that the submission is completed and a time has been booked, but also that you have reviewed and rehearsed your submission so that the presentation goes as smoothly as possible. It is common to feel stressed during an oral presentation, but by preparing and practicing your submission, you can reduce this stress.`,
            fields: [
                { id: 'feedbackType', label: 'Feedback After', type: 'select', options: ['oral presentation', 'review of the resubmission']},
                { id: 'codeComments', label: 'Code Comments', type: 'textarea'},
                { id: 'diagramComments', label: 'Diagram Comments', type: 'textarea'},
                { id: 'reportComments', label: 'Report Comments', type: 'textarea'}
            ]
        },
        passed: {
            text: `Assessment: Passed`,
            fields: []
        }
    },
    sv: {
        resubmission: {
            text: `Bedömning: Skriftlig komplettering
Deadline för komplettering: {deadline}

För godkänt betyg behöver du lämna in en komplettering innehållande:
Alla filer som ingår i inlämningsuppgiften måste lämnas in igen på samma inlämning (även om det endast är komplettering i en av filerna).

{codeComments}
{diagramComments}
{reportComments}

Listan ovan av kompletteringar är endast de kompletteringar som hittades under den muntliga redovisningen. Detta innebär inte att det inte kan finnas andra saker som kommer att behöva kompletteras. Det kan uppstå nya fel när ny kod implementeras så det är viktigt att kolla och säkerställa att alla krav finns med i inlämningen och att inlämningen testkörs.
Kompletteringen måste lämnas in senast två arbetsdagar efter att du genomförde redovisningen eller efter att du fick besked från lärare/assistent om bedömningen. Lämnar du in en komplettering senare än detta hänvisas du till att boka en ny redovisningstid för att göra om redovisningen vid nästa omtillfälle. Om kompletteringen inte kan godkännas hänvisas du till att boka en ny tid för redovisning vid nästa omtillfälle. För att se datum angående omtillfälle se inlämningsuppgifts instruktioner, kursschema eller anslag på canvas.
`,
            fields: [
                { id: 'deadline', label: 'Deadline-datum', type: 'date', required: true },
                { id: 'codeComments', label: 'Kommentarer om kod', type: 'textarea'},
                { id: 'diagramComments', label: 'Kommentarer om diagram', type: 'textarea'},
                { id: 'reportComments', label: 'Kommentarer om rapport', type: 'textarea'}
            ]
        },
        failed: {
            text: `Bedömning: Omredovisning, ny muntlig redovisning krävs.
För att se datum angående omtillfälle se inlämningsuppgifts instruktioner, kursschema eller anslag på canvas.

Vad som behöver tänkas på inför omtillfället samt redan upphittade kompletteringar:
Alla filer som ingår i inlämningsuppgiften måste lämnas in igen på samma inlämning (även om det endast är komplettering i en av filerna).

{codeComments}
{diagramComments}
{reportComments}

Listan ovan av kompletteringar är endast de kompletteringar som hittades under {feedbackType}. Detta innebär inte att det inte kan finnas andra saker som kommer att behöva kompletteras. Det kan uppstå nya fel när ny kod implementeras så det är viktigt att kolla och säkerställa att alla krav finns med i inlämningen och att inlämningen testkörs.
Det är viktigt att komma väl förbered till den muntliga redovisningen. Detta gäller inte bara att inlämningen är gjort och att en tid bokad är bokad, utan det är mycket viktigt att repetera och granska inlämningen så att redovisningen går så smidigt som möjligt. Det är vanligt att det kan bli stressigt under en muntlig redovisning, men genom att förbereda sig och öva på sin inlämning kommer att minska på stressen.
`,
            fields: [
                { id: 'feedbackType', label: 'Feedback efter', type: 'select', options: ['den muntliga redovisningen', 'granskning av komplettering']},
                { id: 'codeComments', label: 'Kommentarer om kod', type: 'textarea'},
                { id: 'diagramComments', label: 'Kommentarer om diagram', type: 'textarea'},
                { id: 'reportComments', label: 'Kommentarer om rapport', type: 'textarea'}
            ]
        },
        passed: {
            text: `Bedömning: Godkänd`,
            fields: []
        }
    }
};

const fieldValues = {};

function addWeekdays(date, days) {
    const result = new Date(date);
    let addedDays = 0;

    while (addedDays < days) {
        result.setDate(result.getDate() + 1);
        const dayOfWeek = result.getDay();
        // Skip weekends (0 = Sunday, 6 = Saturday)
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            addedDays++;
        }
    }

    return result;
}

function getDefaultDeadline() {
    const today = new Date();
    const deadline = addWeekdays(today, 2);
    const year = deadline.getFullYear();
    const month = String(deadline.getMonth() + 1).padStart(2, '0');
    const day = String(deadline.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function updateUILanguage() {
    const lang = document.getElementById('language').value;
    const t = translations[lang];

    document.querySelector('.left-panel h1').textContent = t.title;
    document.querySelector('.right-panel h1').textContent = t.generatedFeedback;
    document.getElementById('copyBtn').textContent = t.copyButton;
    document.getElementById('copyFeedback').textContent = t.copied;

    document.querySelector('label[for="language"]').textContent = t.language;
    document.querySelector('label[for="category"]').textContent = t.category;

    const categorySelect = document.getElementById('category');
    const currentCategory = categorySelect.value;
    categorySelect.innerHTML = '';

    Object.keys(t.categories).forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = t.categories[key];
        categorySelect.appendChild(option);
    });

    categorySelect.value = currentCategory;
}

function renderFields() {
    const lang = document.getElementById('language').value;
    const cat = document.getElementById('category').value;
    const template = templates[lang][cat];
    const container = document.getElementById('dynamic-fields');

    container.innerHTML = '';

    template.fields.forEach(field => {
        const group = document.createElement('div');
        group.className = 'form-group';

        const label = document.createElement('label');
        label.textContent = field.label;
        if (field.required) {
            const req = document.createElement('span');
            req.className = 'required';
            req.textContent = ' *';
            label.appendChild(req);
        }
        group.appendChild(label);

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
        } else if (field.type === 'select') {
            input = document.createElement('select');
            field.options.forEach(opt => {
                const option = document.createElement('option');
                option.value = opt;
                option.textContent = opt;
                input.appendChild(option);
            });
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }

        input.id = field.id;

        // Set default value for deadline field
        if (field.id === 'deadline' && !fieldValues[field.id]) {
            input.value = getDefaultDeadline();
            fieldValues[field.id] = input.value;
        } else if (field.type === 'select' && !fieldValues[field.id]) {
            // For select elements, default to first option
            input.value = field.options[0];
            fieldValues[field.id] = input.value;
        } else {
            input.value = fieldValues[field.id] || '';
        }

        input.addEventListener('input', updateOutput);
        input.addEventListener('change', updateOutput);

        group.appendChild(input);
        container.appendChild(group);
    });

    updateOutput();
}

function updateOutput() {
    const lang = document.getElementById('language').value;
    const cat = document.getElementById('category').value;
    const template = templates[lang][cat];

    let output = template.text;

    template.fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (input) {
            fieldValues[field.id] = input.value;
            let value = input.value || `[${field.label}]`;

            // Check if this is one of the comment fields and if it's empty
            const isCommentField = ['codeComments', 'diagramComments', 'reportComments'].includes(field.id);

            if (isCommentField && !input.value.trim()) {
                // Remove the placeholder line entirely if the comment field is empty
                const lines = output.split('\n');
                const filteredLines = lines.filter(line => !line.includes(`{${field.id}}`));
                output = filteredLines.join('\n');
            } else if (isCommentField) {
                //Append Code:, Diagram:, or Report: before comments if language is English, Swedish otherwise
                let prefix = lang === 'en' ?
                    (field.id === 'codeComments' ? 'Code:' : field.id === 'diagramComments' ? 'Diagram:' : 'Report:') : 
                    (field.id === 'codeComments' ? 'Kod:' : field.id === 'diagramComments' ? 'Diagram:' : 'Rapport:');
                
                // Split the input by lines and add bullet points to each line
                const commentLines = value.split('\n').filter(line => line.trim() !== '');
                const bulletPoints = commentLines.map(line => `###DYNAMIC###• ${line.trim()}###ENDDYNAMIC###`).join('\n');
                
                output = output.replace(`{${field.id}}`, `${prefix}\n${bulletPoints}`);
            } else {
                // Append time to deadline field
                if (field.id === 'deadline' && input.value) {
                    value = input.value + ', kl. 23:59';
                }
                if (field.id === 'feedbackType') {
                    output = output.replace(`{${field.id}}`, value); // No special formatting
                }
                else {
                    output = output.replace(`{${field.id}}`, `###DYNAMIC###${value}###ENDDYNAMIC###`);
                }
            }
        }
    });

    const lines = output.split('\n');
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = '';

    lines.forEach((line) => {
        const lineDiv = document.createElement('div');

        if (line.trim() === '') {
            lineDiv.innerHTML = '&nbsp;';
        } else {
            // Check if line contains a colon
            const colonIndex = line.indexOf(':');
            let processedLine = line;

            if (colonIndex !== -1) {
                // Split at the first colon
                const beforeColon = line.substring(0, colonIndex);
                const afterColon = line.substring(colonIndex);

                // Process before colon (make it bold)
                const parts = beforeColon.split('###DYNAMIC###');
                parts.forEach((part, partIndex) => {
                    if (part.includes('###ENDDYNAMIC###')) {
                        const [dynamic, ...rest] = part.split('###ENDDYNAMIC###');
                        const dynamicSpan = document.createElement('span');
                        dynamicSpan.className = 'output-dynamic output-bold';
                        dynamicSpan.textContent = dynamic;
                        lineDiv.appendChild(dynamicSpan);

                        if (rest.join('###ENDDYNAMIC###')) {
                            const staticSpan = document.createElement('span');
                            staticSpan.className = 'output-static output-bold';
                            staticSpan.textContent = rest.join('###ENDDYNAMIC###');
                            lineDiv.appendChild(staticSpan);
                        }
                    } else {
                        const staticSpan = document.createElement('span');
                        staticSpan.className = 'output-static output-bold';
                        staticSpan.textContent = part;
                        lineDiv.appendChild(staticSpan);
                    }
                });

                // Process after colon (normal formatting)
                const afterParts = afterColon.split('###DYNAMIC###');
                afterParts.forEach((part, partIndex) => {
                    if (part.includes('###ENDDYNAMIC###')) {
                        const [dynamic, ...rest] = part.split('###ENDDYNAMIC###');
                        const dynamicSpan = document.createElement('span');
                        dynamicSpan.className = 'output-dynamic';
                        dynamicSpan.textContent = dynamic;
                        lineDiv.appendChild(dynamicSpan);

                        if (rest.join('###ENDDYNAMIC###')) {
                            const staticSpan = document.createElement('span');
                            staticSpan.className = 'output-static';
                            staticSpan.textContent = rest.join('###ENDDYNAMIC###');
                            lineDiv.appendChild(staticSpan);
                        }
                    } else {
                        const staticSpan = document.createElement('span');
                        staticSpan.className = 'output-static';
                        staticSpan.textContent = part;
                        lineDiv.appendChild(staticSpan);
                    }
                });
            } else {
                // No colon, process normally
                const parts = line.split('###DYNAMIC###');
                parts.forEach((part, partIndex) => {
                    if (part.includes('###ENDDYNAMIC###')) {
                        const [dynamic, ...rest] = part.split('###ENDDYNAMIC###');
                        const dynamicSpan = document.createElement('span');
                        dynamicSpan.className = 'output-dynamic';
                        dynamicSpan.textContent = dynamic;
                        lineDiv.appendChild(dynamicSpan);

                        if (rest.join('###ENDDYNAMIC###')) {
                            const staticSpan = document.createElement('span');
                            staticSpan.className = 'output-static';
                            staticSpan.textContent = rest.join('###ENDDYNAMIC###');
                            lineDiv.appendChild(staticSpan);
                        }
                    } else {
                        const staticSpan = document.createElement('span');
                        staticSpan.className = 'output-static';
                        staticSpan.textContent = part;
                        lineDiv.appendChild(staticSpan);
                    }
                });
            }
        }

        outputContainer.appendChild(lineDiv);
    });
}

document.getElementById('language').addEventListener('change', () => {
    updateUILanguage();
    renderFields();
});
document.getElementById('category').addEventListener('change', renderFields);

document.getElementById('copyBtn').addEventListener('click', () => {
    //Alert and return if all comment fields are empty when they are present
    const codeCommentsField = document.getElementById('codeComments');
    const diagramCommentsField = document.getElementById('diagramComments');
    const reportCommentsField = document.getElementById('reportComments');
    
    // Check if comment fields exist (they won't exist for "passed" category)
    if (codeCommentsField && diagramCommentsField && reportCommentsField) {
        if (codeCommentsField.value.trim() === '' &&
            diagramCommentsField.value.trim() === '' &&
            reportCommentsField.value.trim() === '') {
            const feedback = document.getElementById('copyFeedback');
            const lang = document.getElementById('language').value;
            feedback.textContent = translations[lang].copiedError;
            feedback.classList.add('show');
            setTimeout(() => {
                feedback.classList.remove('show');
                // Reset to original text after hiding
                feedback.textContent = translations[lang].copied;
            }, 2000);
            return;
        }
    }

    const outputContainer = document.getElementById('output');

    // Create a temporary container to build formatted HTML
    const tempDiv = document.createElement('div');
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.fontSize = '14px';

    // Clone the output and process it for clipboard
    Array.from(outputContainer.children).forEach(lineDiv => {
        const lineCopy = document.createElement('div');

        Array.from(lineDiv.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                lineCopy.appendChild(document.createTextNode(node.textContent));
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const isBold = node.classList.contains('output-bold');
                const isItalic = node.classList.contains('output-static');

                let element = document.createTextNode(node.textContent);
                let wrapper = lineCopy;

                if (isBold && isItalic) {
                    const bold = document.createElement('strong');
                    const italic = document.createElement('em');
                    italic.textContent = node.textContent;
                    bold.appendChild(italic);
                    wrapper.appendChild(bold);
                } else if (isBold) {
                    const bold = document.createElement('strong');
                    bold.textContent = node.textContent;
                    wrapper.appendChild(bold);
                } else if (isItalic) {
                    const italic = document.createElement('em');
                    italic.textContent = node.textContent;
                    wrapper.appendChild(italic);
                } else {
                    wrapper.appendChild(element);
                }
            }
        });

        tempDiv.appendChild(lineCopy);
    });

    // Copy both HTML and plain text to clipboard
    const htmlContent = tempDiv.innerHTML;
    const textContent = outputContainer.innerText;

    const clipboardItem = new ClipboardItem({
        'text/html': new Blob([htmlContent], { type: 'text/html' }),
        'text/plain': new Blob([textContent], { type: 'text/plain' })
    });

    navigator.clipboard.write([clipboardItem]).then(() => {
        const feedback = document.getElementById('copyFeedback');
        feedback.classList.add('show');
        setTimeout(() => feedback.classList.remove('show'), 2000);
    }).catch(err => {
        console.error('Copy failed:', err);
        // Fallback to plain text if rich text copy fails
        navigator.clipboard.writeText(textContent).then(() => {
            const feedback = document.getElementById('copyFeedback');
            feedback.classList.add('show');
            setTimeout(() => feedback.classList.remove('show'), 2000);
        });
    });
});

updateUILanguage();
renderFields();