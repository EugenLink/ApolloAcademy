
export default function (data, [el1, el2, el3], Component) {
    data.map((el, current) => {
        if (current === 0 || current % 2 === 0) {
            var order =  '';
            var animate = 'bounceInRight';
        } else {
            var order = 'row-reverse'
            var animate = 'bounceInLeft';
        }
        data.keys(el => {

        })

    })
}


{data.map((el, current) => {

    if (el.image && el.text && el.title) {
        return <AchivmentItem animate = {animate} order = {order} title = {el.title} img = {el.image} text = {el.text}/>
    }
})}