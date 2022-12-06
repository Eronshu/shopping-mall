function AddProduct(data){
    return (dispatch, getState) => {
        dispatch({ type: "ADD_PRODUCT", data })
    }
}

function RemoveProduct(data){
    return (dispatch, getState) => {
        dispatch({ type: "REMOVE_PRODUCT", data })
    }
}

module.exports = {
    AddProduct,
    RemoveProduct
}