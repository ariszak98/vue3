import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {

    components: { AssignmentList, AssignmentCreate },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress" ></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>       
        
        <assignment-create :assignment="assignment" ></assignment-create>
    `,

    data() {
        return {

            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 }
            ]



        }
    },

    computed: {
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        },

        inProgressAssignments() {
            return this.assignments.filter(assignment => ! assignment.complete);
        }
    },

    methods: {

        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

        }
    }


}