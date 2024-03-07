import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../Home_Components/Helmet/Helmet";
import CommonSection from "../Home_Components/UI/CommonSection";
import BlogList from "../Home_Components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <CommonSection title="Blogs" />
      <section>
        <Container>
          <Row>
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;