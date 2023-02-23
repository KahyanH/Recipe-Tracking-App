import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const recipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [content, setContent] = useState({ ...recipe });

  const handleContentChange = ({ target }) => {
    setContent({ ...content, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(content);
    setContent({ ...recipe });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                onChange={handleContentChange}
                value={content.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                type="text"
                onChange={handleContentChange}
                value={content.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                placeholder="URL"
                type="url"
                onChange={handleContentChange}
                value={content.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                rows={2}
                onChange={handleContentChange}
                value={content.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                rows={2}
                onChange={handleContentChange}
                value={content.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
