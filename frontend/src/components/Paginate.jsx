import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
    return pages > 1 && (
        <Pagination>
            {[...Array(pages)].map((_, index) => (
                <Link
                    key={index + 1}
                    to={
                        !isAdmin
                            ? keyword
                                ? `/search/${keyword}/page/${index + 1}`
                                : `/page/${index + 1}`
                            : `/admin/productlist/${index + 1}`
                    }
                >
                    <Pagination.Item key={index + 1} active={index + 1 === page}>
                        {index + 1}
                    </Pagination.Item>
                </Link>
            ))}
        </Pagination>
    )
}

export default Paginate;
