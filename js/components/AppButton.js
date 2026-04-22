export default {


        template:`
            <button 
                :class="{
                    'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
                    'bg-gray-200 hover:bg-gray-400': type === 'muted',
                    'bg-blue-500 hover:bg-blue-700 text-white': type === 'primary',
                    'bg-purple-500 hover:bg-purple-700 text-white': type === 'secondary',
                    'is-loading': processing
                }" 
                :disabled="processing">
                <slot />
            </button>
        `,

        props: {
            type: {
                type: String,
                default: 'primary'
            }
        },

        processing: {
            type: Boolean,
            default: false
        }



}