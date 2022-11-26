import React from "react";
import { Product, FooterBanner, HeroBanner } from "./components";
import { axiosInstance } from "../utils/APIcall";

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const products = [
    {
      name: "Humidifer",
      price: 1000,
      details: "Beautiful",
      slug: "1",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Diffuser",
      price: 2000,
      details: "Beautiful",
      slug: "2",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
    {
      name: "Light led",
      price: 500,
      details: "Beautiful",
      slug: "3",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
        "",
      ],
    },
  ];

  const bannerData = [
    {
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      ButtonText: "ButtonText",
      product: "camera",
      desc: "awsome",
      smallText: "smallText",
      midText: "midText",
      largeText1: "largeText1",
      largeText2: "largeText2",
      discount: "80%",
      saleTime: "3 days",
    },
  ];

  return {
    props: { products, bannerData },
  };
};

export default Home;
