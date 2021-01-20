const initialState = {
    teacherList : [],
    teacherLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TEACHERS_SUCCESS' :
            return {
                ...state,
                teacherLoading: true,
                teacherList: action.payload
            }
    }
}