export class CaseStatus {
    id: number;
    name: string;
}

export const CASESTATUS: CaseStatus[] = [
    {
        'id': 1,
        'name': 'In Progress'
    },
    {
        'id': 2,
        'name': 'Pending Diagnosis'
    },
    {
        'id': 3,
        'name': 'Released'
    }
];
