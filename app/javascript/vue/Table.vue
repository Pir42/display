<template>
    <div>

        <div class="container actions__header">
            <div class="search">
            <input type="text" v-model="filter" :placeholder='placeholder' class="search__input">
            </div>
            <div class="actions__links">
                <div class="cta">
                    <a v-bind:href="url_new">{{ new_link_text }}</a>
                </div>
            </div>
        </div>
        <table>
            <thead>
            <tr>
                <slot name="table_head"></slot>
            </tr>
            </thead>
            <tbody>
            <template v-for="(item, i) in filtered_data">
                <tr :key="i">
                    <slot name="table_item" v-bind:item="item"></slot>
                </tr>
                <tr class="separator"></tr>
            </template>
            </tbody>
        </table>


        <div class="container">
            <span @click="prevPage" class="action__back icon-player-skip-back" v-if="start > 0"></span>
            <span @click="nextPage" class="action__next icon-player-skip-forward" v-if="end < data.length"></span>
        </div>

    </div>
</template>

<script>

import "../../../lib/assets/fonticon/style.css";

export default {
    props: {
        placeholder: String,
        url_new: String,
        new_link_text: String,
        data: Array,
        filter_fc: Function
    },

    data() {
        return {
            filter: "",
            pageSize: 8,
            currentPage: 1
        }
    },

    computed: {
        filtered_data() {
            if(this.filter){
                return this.data.filter((i) => 
                    this.filter_fc(i, this.filter)
                )
            } else {
                return this.data
            }
        },
        data_by_page() {
            return this.filtered_data.filter((row, index) => {
                let start = (this.currentPage-1)*this.pageSize;
                let end = this.currentPage*this.pageSize;
                if(index >= start && index < end) return true;
            });
        },
        start() {
            return (this.currentPage-1)*this.pageSize
        },
        end() {
            return this.currentPage*this.pageSize
        }
    },

    methods: {
        nextPage() {
            if((this.currentPage*this.pageSize) < this.filtered_setlists.length) this.currentPage++;
        },
        prevPage() {
            if(this.currentPage > 1) this.currentPage--;
        }
    }

}

</script>