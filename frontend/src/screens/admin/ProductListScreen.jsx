import { LinkContainer } from 'react-router-dom';
import { Table, Button, Row, Col} from 'react-bootstrap';
import { 
    useGetProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation 
} from '../../slices/productsApiSlice';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { toast } from 'react-toastify';

const ProductListScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();
    const [createProduct, { isLoading: loadingCreate }] = useCreateProductMutation();
    const [deleteProduct, { isLoading: loadingDelete }] = useDeleteProductMutation();
    
    const createProductHandler = async () => {
        if (window.confirm('Are you sure to add a new product?')) {
            try {
                await createProduct();
                refetch();
                toast.success('Product created');
            } catch (error) {
                toast.error(error?.data?.message || error.message);
            }
        }
    };
    
    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await deleteProduct(id).unwrap();
                toast.success('Product deleted');
                refetch();
            } catch (error) {
                toast.error(error?.data?.message || error.message);
            }
        }
    };

    return (
        <>
        <Row className='align-items-center'>
            <Col>
                <h1>Products</h1>
            </Col>
            <Col className='text-end'>
                <Button 
                    className='btn-sm m-3' 
                    variant='primary' 
                    onClick={createProductHandler} 
                    disabled={loadingCreate}
                >
                    <FaPlus /> Create Product
                </Button>
            </Col>
        </Row>

        {loadingCreate && <Loader />}
        {loadingDelete && <Loader />}

        {isLoading ? (
            <Loader />
        ) : error ? (
            <Message variant='danger'>{error.data.message}</Message>
        ) : (
            <>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>BRAND</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                    <Button variant='light' className='btn-sm mx-2'>
                                        <FaEdit />
                                    </Button>
                                </LinkContainer>
                                <Button
                                    variant='danger'
                                    className='btn-sm'
                                    onClick={() => deleteHandler(product._id)}
                                >
                                    <FaTrash style={{ color: 'white'}} />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </>
        )}
        </>
    );
};

export default ProductListScreen;