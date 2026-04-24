import AssignmentList from "./AssignmentList.js";

export default {

    components: { AssignmentList },

    template: `
        <assignment-list :assignments="inProgressAssignments" title="In Progress" ></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>       
        
        <form @submit.prevent="add">
        <div class="border mt-4">
            <input v-model="newAssignment" placeholder="New Assignment" class="p-2"/>
            <button type="submit" class="ml-4 p-2 border-l">Add</button>
            </div>
        </form>     
    `,

    data() {
        return {

            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 }
            ],

            newAssignment: '',



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

            this.newAssignment = '';
        }
    }


}