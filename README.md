# 🎨 **My Portfolio Website Take**

![Website](https://github.com/user-attachments/assets/18b6a0ed-7da1-4b93-824d-4e36a42f48c7)


This project came to life from my newfound passion for [Three.js](https://threejs.org/) and its amazing 3D graphics capabilities, enabling the creation of engaging and visually pleasing web designs. A significant motivator was my need for a personal website, so I decided to build something beyond a basic HTML page and CSS stylesheet.

🚀 **Journey:**  
It has been a rollercoaster, especially since I had no prior experience with JavaScript and had to learn it from scratch. The project is built on [React.js](https://reactjs.org/), with [Three.js](https://threejs.org/), [Drei](https://github.com/pmndrs/drei), and [React-Three-Fiber](https://github.com/pmndrs/react-three-fiber) handling the 3D graphics, and [Styled-Components](https://styled-components.com/) managing the styling of the webpage.

🛠️ **Challenges:**  
Implementing multiple technologies that work together was a Sisyphean task, especially as a newcomer to front-end web development. Along the way, I encountered challenges like miscompiled 3D objects and Three.js's issue of not receiving touch input on the canvas, which prevented mobile users from scrolling. However, with time and patience, I was able to resolve these issues.

💡 **Future Plans:**  
This version is just the beginning. I plan to continuously add new features, as the current iteration is still basic and lacks many functionalities—but all in due time.

## 💻 Tech Stack Overview 🛠️


```plaintext
┌──────────────────────┐
│      React.js        │
│  (App Structure)     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐     ┌─────────────────────┐
│      Three.js        │     │   Styled-Components │
│   (3D Graphics)      │◄───►│     (Styling)       │
└──────────┬───────────┘     └──────────┬──────────┘
           │                             │
           ▼                             │
┌──────────────────────┐     ┌───────────▼─────────┐
│      Drei            │     │    FontAwesome      │
│ (Helper Components)  │     │       (Icons)       │
└──────────────────────┘     └─────────────────────┘
```

	React.js: The backbone framework of the application.
	Three.js: Handles the 3D graphics and animations.
	Drei: Provides useful helper components for Three.js.
	React-Three-Fiber: Integrates Three.js with React for easier 3D rendering.
	Styled-Components: Styles the web components much easier with React.
	FontAwesome: Adds a variety of icons, such as the ones I used in the Find Me On section.

## 📦 **Modules Required for Running the App**

To run this project, you'll need to install the following modules:

```bash
yarn
vite
yarn add styled-components
yarn add three-js
yarn add @react-three/drei
yarn add react-three-fiber
yarn add react-simple-maps
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
