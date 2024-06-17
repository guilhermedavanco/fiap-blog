import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

import { contentfulClient } from "../utils/createContentfulClient";

const ITEMS_PER_PAGE = 1;

function PostList() {
    //const pagesCount=10

    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);


    const getPosts = async (page = 1) => {
        try {
            // se a promise for resolvida, o resultado é capturado aqui
            const response = await contentfulClient.getEntries({
                content_type: 'blogPost5j',
                limit: ITEMS_PER_PAGE,
                skip: ITEMS_PER_PAGE * (currentPage - 1) || 0,
                order: '-sys.createdAt',
            });

            console.log(response.items);
            setPosts(response.items);
            setTotalPages(Math.ceil(response.total / ITEMS_PER_PAGE));

        } catch (error) {
            // se a promise for rejeitada, o erro é capturado aqui
            console.log('Erro ao obter posts', error);
            setPosts([]);
        }
    };

    useEffect(() => {
        getPosts(currentPage);
    }, [currentPage]); 

    return (
        <Layout>
            <div className="container my-4">
                <div className="row">
                    <main className="col-md-12">
                        <h2 className="mb-3">
                            Lista de posts
                        </h2>

                        {posts.map( (item) => (
                            <Card
                                key={item.sys.id}
                                title={item.fields.blogPostTitle}
                                text={item.fields.blogPostDescription}
                                link={'/post/' + item.fields.blogPostSlug}
                            />
                        ) )}
                        <Pagination
                            pagesCount={totalPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />

                        <Link to="/" className="btn btn-dark mt-4">
                            Voltar para Home
                        </Link>
                    </main>

                </div>                
            </div>
        </Layout>
    );
}

export default PostList;