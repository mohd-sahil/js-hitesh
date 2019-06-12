let mytodo = {
           day: 'monday',
           meetings: 0,
           meetdone: 0,
}

let edit_meetings = function(obj , meetings){
obj.meetings = obj.meetings + meetings
}

let edit_meetdone = function(obj , meetdone){
           obj.meetdone = obj.meetdone + meetdone
}


edit_meetings(mytodo , 5)

edit_meetings(mytodo, 3)

edit_meetdone(mytodo, 4)


console.log(mytodo);

let meetings_left = mytodo.meetings - mytodo.meetdone

console.log(meetings_left);
