declare const muscles: ({
    name: string;
    subgroups: ({
        name: string;
        subsubgroups?: undefined;
    } | {
        name: string;
        subsubgroups: string[];
    })[];
} | {
    name: string;
    subgroups?: undefined;
})[];
export default muscles;
