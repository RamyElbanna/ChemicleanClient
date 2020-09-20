const getProducts = (state) => {
    fetch('http://localhost:52308/products')
        .then(res => res.json())
        .then(result => {
            state.setState({
                isLoaded: true,
                items: result
            }, error => {
                state.setState({
                    isLoaded: true,
                    error
                })
            })
        })
}

export const saveDataSheet = (productId, state) => {
    fetch(`http://localhost:52308/products/save/${productId}`)
        .then(result => {
            state.setState({
                isSaved: true,
            })
            if (result.status === 200) alert('saved successfully');
            else {
                alert('some error happened');
            }
        }, (error) => {
            state.setState({
                isSaved: false,
                error
            })
            alert('Error in saving');
        });
}

export default getProducts;