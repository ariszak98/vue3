export default {

    template: `
    
    <form @submit.prevent="add">
        <div class="border mt-4">
            <input autofocus v-model="newAssignment" placeholder="New Assignment" class="p-2"/>
            <button type="submit" class="ml-4 p-2 border-l">Add</button>
        </div>
    </form>     
    `,

    props: {
        assignments: Array
    },

    data() {
        return {
            newAssignment: ''
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