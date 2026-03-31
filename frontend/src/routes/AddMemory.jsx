import "./AddMemory.css";

import axios from "axios";

import { useState } from "react";

const AddMemory = () => {
  return (
    <div className="add-memory-page">
      <h2>Crie uma memória</h2>
      <form>
        <label>
          <p>Título:</p>
          <input type="text" name="title" placeholder="Difina um título" />
        </label>
        <label>
          <p>Descrição:</p>
          <textarea
            type="text"
            name="description"
            placeholder="Explique o que aconteceu"
          ></textarea>
        </label>
        <label>
          <p>Foto:</p>
          <input type="file" name="image" />
        </label>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
};

export default AddMemory;
