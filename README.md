<br>
<h2 align="center">👉 Zebrands Technical Interview 👈</h2>
<p align="center">
    <br>
    <img src="https://img.shields.io/github/forks/santychuy/luuna-test?style=flat-square" alt="forks">
    <img src="https://img.shields.io/github/issues/santychuy/luuna-test?style=flat-square" alt="issues">
    <img src="https://img.shields.io/github/package-json/v/santychuy/luuna-test?style=flat-square" alt="version">
    <img src="https://img.shields.io/github/license/santychuy/luuna-test?style=flat-square" alt="license">
    <br>
    <br>
    <a href="#demo">Demo<a/> •
    <a href="#descripción">Descripción<a/> •
    <a href="#cómo-se-abordó-el-problema">¿Cómo se abordó el problema?<a/> •
    <a href="#puntos-a-destacar">Puntos a destacar<a/> •
    <a href="#tecnologías-usadas">Tecnologías usadas<a/> • <a href="#métodos-utilizados">Métodos utilizados<a/> • <a href="#puntos-a-mejorar">Puntos a mejorar<a/>
<p/>
<br>

---

## Demo

[Demo](https://luuna-technical-interview.vercel.app/)

<br>

## Descripción

Aplicación que nos ayuda hacer una busqueda de usuarios y repositorios públicos dentro de Github, con la ayuda de la API que nos proveen ellos.

<br>

## Cómo se abordó el problema

- Pensar e ilustrar de una manera sencilla de cómo se ilustrará la aplicación para que sea amigable para el usuario que la vaya a utilizar.

- Teniendo la estructura básica de cómo se verá, se empieza a construir lo visual, empezando por la vista móvil hasta llegar a terminar la vista de escritorios.

- Investigar sobre la API de Github para comenzar a traer datos que se vayan escribiendo en base a lo que pide el usuario, y por fortuna, se tiene un endpoint dedicado a traer datos dependiendo a lo que se le pase por medio de una variable.

- Ya maquetando los datos traidos e ilustrandolos dentro de sus respectivos componentes, se hace un componente Switch para diferenciar el tipo de busqueda que se hará (usuario o repositorio) para poder hacerlo lo más sencillo posible la aplicación.

- Por último se afinaron detalles de la aplicación para que sea más presentable y amigable (animaciones de los componentes, delay a la hora de escribir para no hacer fetch de los datos cada segundo, etc)

<br>

## Puntos a destacar

- Es responsivo a diferentes tamaños de pantalla
- Animaciones suaves
- Estructura sencilla de proyecto (acomodo de archivos)
- Se hace un delay a la hora de se deja de escribir en el buscador para la traida de datos

<br>

## Tecnologías usadas

- [Typescript](https://www.typescriptlang.org/)
- [Next.js (React)](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Styled-Components](https://styled-components.com/)

<br>

## Métodos utilizados

- Se utiliza **Prettier y Eslint** para el formateo y correciones que tengamos en el código que vayamos escribiendo, para **Eslint** se está utilizando las configuraciones de [**Airbnb**](https://www.npmjs.com/package/eslint-config-airbnb-typescript) y de [**Typescript**](https://github.com/typescript-eslint/typescript-eslint), para **Prettier** utilizo reglas que a mis gustos se me hacen lo mejor para el formateo de código.

- Utilizamos **git-hooks** junto con la ayuda de [**husky**](https://www.npmjs.com/package/husky) para correr scripts durante ciertos eventos que vayamos definiendo en nuestro **package.json**, en este caso lo utilizamos para que corra ciertos scripts a la hora de cada **commit**

<br>

## Puntos a mejorar

- Crear un tema para tener centralizado las constantes que tengan que ver con tamaño de fuentes de letra, colores, etc.
- Agregar Unit Testing en la aplicación
