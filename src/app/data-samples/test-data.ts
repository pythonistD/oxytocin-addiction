
export interface Question {
    q_id?: number,
    question: string,
    type?: 'radio' | 'checkbox',
    options: Option[]
}

export interface UnParsedQuestion {
    question: string,
    type?: 'radio' | 'checkbox',
    options: string[]
}

export const testData: UnParsedQuestion[] = [
    {
        question: "How do you describe your mood generally?",
        type : "radio",
        options: [
            'Happy',
            'Sad',
            'Anxious'
        ]
    },
    {
        question: "Select your interests",
        type : "checkbox",
        options: [
            'Technology',
            'Psychology',
            'Arts'
        ]
    },
]

export interface Option {
    op_id: number,
    q_id: number,
    payload: string,
    checked: boolean
}


export function parseTestData(data: UnParsedQuestion[]): [Question[], Option[]]{
    let parsedQuestions: Question[] = [];
    let options_ar: Option[] = [];
    let c = 0;
    for(let i = 0; i < data.length; i++){
        parsedQuestions.push({
            q_id: i,
            question: data[i].question,
            type: data[i].type,
            options: []
        })
       for(let j = 0; j < data[i].options.length; j++){
            let t = {
                op_id: c,
                q_id: i,
                payload: data[i].options[j],
                checked: false
            };
            c++
            options_ar.push(t);
            parsedQuestions[i].options.push(t);
       }
    }
    console.log(parsedQuestions)
    return [parsedQuestions, options_ar];
}

interface Test{
    test_id: number,
    test_name: string
}