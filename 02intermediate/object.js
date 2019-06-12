let video_descrip = {
    title : 'learning objects',
    video_length : 10,
    creator: 'sahil'
}

// console.log(video_descrip);

// console.log(`video title - ${video_descrip.title} by creator - ${video_descrip.creator}`);

let course = {
    course_name: 'JavaScript',
    price: 500,
    descrip: 'learn js basics'
}

// console.log(`new course topic - ${course.course_name} price is just Rs. ${course.price} extra detail- ${course.descrip}`);

// video_descrip.creator = 'undertaker'

// console.log(video_descrip);


let change_func = function(){
    console.log(`this func has changed title of obj ${video_descrip.title}`);
    
    }

    change_func(video_descrip)