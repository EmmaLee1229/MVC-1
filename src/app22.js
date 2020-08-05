import './app22.css'
import $ from 'jquery'
const $tabBar = $('#app22 > .tab-bar')
const $tabContent = $('#app22 > .tab-content')
$tabBar.on('click','li',(e)=>{
    const $li =$(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    const index = $li.index()
    $tabContent.children().children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})
$tabBar.children().children().eq(0).trigger('click')