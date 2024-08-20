let student = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "+1-555-1234",
        "image": "https://example.com/images/jane_smith.jpg"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "phone": "+1-555-5678",
        "image": "https://example.com/images/jane_smith.jpg"
      },
      {
        "id": 3,
        "name": "Robert Johnson",
        "email": "robert.johnson@example.com",
        "phone": "+1-555-9012",
        "image": "https://example.com/images/robert_johnson.jpg"
      },
      {
        "id": 4,
        "name": "Emily Davis",
        "email": "emily.davis@example.com",
        "phone": "+1-555-3456",
        "image": "https://example.com/images/emily_davis.jpg"
      },
      {
        "id": 5,
        "name": "Michael Brown",
        "email": "michael.brown@example.com",
        "phone": "+1-555-7890",
        "image": "https://example.com/images/michael_brown.jpg"
      },
      {
        "id": 6,
        "name": "Linda Wilson",
        "email": "linda.wilson@example.com",
        "phone": "+1-555-2345",
        "image": "https://example.com/images/linda_wilson.jpg"
      },
      {
        "id": 7,
        "name": "James Moore",
        "email": "james.moore@example.com",
        "phone": "+1-555-6789",
        "image": "https://example.com/images/james_moore.jpg"
      },
      {
        "id": 8,
        "name": "Patricia Taylor",
        "email": "patricia.taylor@example.com",
        "phone": "+1-555-0123",
        "image": "https://example.com/images/patricia_taylor.jpg"
      },
      {
        "id": 9,
        "name": "David Anderson",
        "email": "david.anderson@example.com",
        "phone": "+1-555-4567",
        "image": "https://example.com/images/david_anderson.jpg"
      },
      {
        "id": 10,
        "name": "Barbara Thomas",
        "email": "barbara.thomas@example.com",
        "phone": "+1-555-8901",
        "image": "https://example.com/images/barbara_thomas.jpg"
      },
      {
        "id": 11,
        "name": "Christopher Jackson",
        "email": "christopher.jackson@example.com",
        "phone": "+1-555-2345",
        "image": "https://example.com/images/christopher_jackson.jpg"
      },
      {
        "id": 12,
        "name": "Susan White",
        "email": "susan.white@example.com",
        "phone": "+1-555-6789",
        "image": "https://example.com/images/susan_white.jpg"
      },
      {
        "id": 13,
        "name": "Daniel Harris",
        "email": "daniel.harris@example.com",
        "phone": "+1-555-0123",
        "image": "https://example.com/images/daniel_harris.jpg"
      },
      {
        "id": 14,
        "name": "Nancy Martin",
        "email": "nancy.martin@example.com",
        "phone": "+1-555-4567",
        "image": "https://example.com/images/nancy_martin.jpg"
      },
      {
        "id": 15,
        "name": "Matthew Thompson",
        "email": "matthew.thompson@example.com",
        "phone": "+1-555-8901",
        "image": "https://example.com/images/matthew_thompson.jpg"
      },
      {
        "id": 16,
        "name": "Sandra Martinez",
        "email": "sandra.martinez@example.com",
        "phone": "+1-555-2345",
        "image": "https://example.com/images/sandra_martinez.jpg"
      },
      {
        "id": 17,
        "name": "Anthony Robinson",
        "email": "anthony.robinson@example.com",
        "phone": "+1-555-6789",
        "image": "https://example.com/images/anthony_robinson.jpg"
      },
      {
        "id": 18,
        "name": "Mary Clark",
        "email": "mary.clark@example.com",
        "phone": "+1-555-0123",
        "image": "https://example.com/images/mary_clark.jpg"
      },
      {
        "id": 19,
        "name": "Mark Rodriguez",
        "email": "mark.rodriguez@example.com",
        "phone": "+1-555-4567",
        "image": "https://example.com/images/mark_rodriguez.jpg"
      },
      {
        "id": 20,
        "name": "Laura Lewis",
        "email": "laura.lewis@example.com",
        "phone": "+1-555-8901",
        "image": "https://example.com/images/laura_lewis.jpg"
      }
]


function studentElement(items){
    return ` <div class="col-lg-3 mb-4">
                    <div class="student-data text-center p-2 border bg-light rounded-1">
                        <img class="img-fluid" src="assact/imegs/jhs.jpg" alt="image">
                        <h4 class="text-bold pt-2">${items.name}</h4>
                        <p class="m-0"><strong>Email:</strong>${items.email}</p>
                        <p><strong>Phone:</strong>${items.p}</p>
                    </div>
                </div> `
}; 

let totalStudent = [];
student.forEach(function(items){
    totalStudent.push( studentElement(items) )
})
document.getElementById("student_area").innerHTML = totalStudent.join(" ");
