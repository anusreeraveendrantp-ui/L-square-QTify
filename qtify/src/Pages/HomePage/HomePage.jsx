import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";

import "./HomePage.module.css";
import styles from "./HomePage.module.css";
import Section from "../../components/Section/Section"; 
import { fetchFilters } from "../../api/api";
export default function HomePage() {    
    const { data } = useOutletContext();
    const { topAlbums, newAlbums, songs, genres} = data;
  console.log("topAlbums in homepage:", topAlbums);
    return (
        <>
        <Hero  />
         <div className={styles.wrapper}>
         <Section title="Top Albums"  data ={topAlbums} type="album" />
         <Section title="New Albums" data={newAlbums} type="album" />
         <Section title="Songs" 
         data={songs}
         filterSource ={fetchFilters}
          type="song" />
      </div>
        </>
     
    );
  }