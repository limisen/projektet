let sub_nav = document.getElementById("sub_nav")
let sub_maps = document.getElementById('sub_maps')

sub_maps.addEventListener('on_cursor_hover', (instance) => {
    sub_maps.onmouseover(
        sub_maps.classList.toggle('show'))
    sub_maps.onpointerleave(
        sub_maps.classList.toggle('hide')
    )
})