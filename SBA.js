const CourseInfo = {"id": 151,
                    "name": "Pokéology of Kanto"};
const AssignmentGroup = {
    "id": 107,
    "name": "Starting With The Starters",
    "course_id": 151,
    "group_weight": 30,
    "assignments": [
        {
         "id": 1,
         "name": "Bulbasaur Line Ecology",
         "due_at": "09-01-2023",
         "points_possible": 100
        },
        {
         "id": 2,
         "name": "Squirtle Line Defenses",
         "due_at": "09-08-2023",
         "points_possible": 150
        },
        {
         "id": 3,
         "name": "Charmander Line Aggression",
         "due_at": "09-15-2023",
         "points_possible": 200
        }]};
const LearnerSubmissions = [{
    "learner_id": 118,
    "assignment_id": 2,
    "submission": {
      "submitted_at": "09-08-2023",
      "score": 120
     }
    },
    {
    "learner_id": 118,
    "assignment_id": 3,
    "submission": {
        "submitted_at": "09-14-2023",
        "score": 190
        }
    },
    {
    "learner_id": 118,
    "assignment_id": 1,
    "submission": {
        "submitted_at": "09-02-2023",
        "score": 80
        }
    },
    {
    "learner_id": 101,
    "assignment_id": 1,
    "submission": {
        "submitted_at": "09-01-2023",
        "score": 100
        }
    },
    {
    "learner_id": 101,
    "assignment_id": 3,
    "submission": {
        "submitted_at": "09-17-2023",
        "score": 75
        }
    },
    {
    "learner_id": 101,
    "assignment_id": 2,
    "submission": {
        "submitted_at": "09-10-2023",
        "score": 150
        }
    }]
            //(CourseInfo, AssignmentGroup, [LearnerSubmission])
function getLearnerData(course, ag, submissions) {
    newArray = [];
    if (course.id != ag.course_id) {
        throw new Error ("Mismatching IDs");
    }
    for (const assignment of ag.assignments) {
        
    }
}

console.log();