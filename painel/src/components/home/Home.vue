<template>
    <div class="home">
        <PageTitle icon= "fa fa-home" main="Dashboard" sub="Estatísticas" />
        <div class="stats">
            <Stat title="Categorias" :value="stat.categories"
                icon= "fa fa folder" color = #d54d50 />
            <Stat title="Artigos" :value="stat.articles" 
                icon= "fa fa-file" color = "#3bc480" />
            <Stat title = "Usuarios" :value="stat.users" 
                icon= "fa fa-user" color = "#3282cd" />
            <Stat title= "Membros" :value="stat.members"
                icon ="fa fa-user-circle" aria-hidden="true" color = #33FF60 />
            <Stat title= "Patrocinadores" :value = "stat.sponsors"
                icon = "fa fa-star" color = #FFD433 />
        </div>
    </div>

</template>

<script>
import PageTitle from '@/components/template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: "Home",
    components: { PageTitle , Stat },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }
    
}
</script>

<style>
  
</style>