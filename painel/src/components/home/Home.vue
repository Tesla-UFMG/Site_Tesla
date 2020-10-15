<template>
    <div class="home">
        <PageTitle icon= "fa fa-home" main="Dashboard" sub="Estatísticas" />
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

        }
    }
    
}
</script>

<style>
  
</style>