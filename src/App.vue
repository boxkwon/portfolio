<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/basic">Basic</router-link>
    <router-link to="/databinding">DataBinding</router-link>
    <router-link to="/databindinghtml">DataBindingHtml</router-link>
    <router-link to="/databindingexample">DataBindingExample</router-link>
    <router-link to="/databindingattribute">DataBindingAttribute</router-link>
    <router-link to="/DataBindingclass">DataBindingClass</router-link>
    <router-link to="/DataBindingInlineStyle">DataBindingInlineStyle</router-link>
    <router-link to="/Listrendering">ListRendering</router-link>
    <router-link to="/Renderingexample">RenderingExample</router-link>
    <router-link to="/Eventexample">EventExample</router-link>
    <router-link to="/Computedexample">ComputedExample</router-link>
    <router-link to="/Watchexample">WatchExample</router-link>
    <router-link to="/Searchexample">SearchExample</router-link>
    <router-link to="/Saveexample">SaveExample</router-link>
    <router-link to="/Serverdata">ServerData</router-link>
    <router-link to="/Importexample">ImportExample</router-link>
    <router-link to="/Parentcomponentexample">ParentComponentExample</router-link>
    <router-link to="/Parentcomponentexample2">ParentComponentExample2</router-link>
    <router-link to="/Parentcomponentexample3">ParentComponentExample3</router-link>
    <router-link to="/Parentcomponentexample4">ParentComponentExample4</router-link>
    <router-link to="/Parentcomponentexample5">ParentComponentExample5</router-link>
    <router-link to="/Parentcomponentexample6">ParentComponentExample6</router-link>
    <router-link to="/slot">SlotUseModalLayout</router-link>
    <router-link to="/Provideinject">ProvideInject</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

#nav {
  width: 300px;
}

#nav a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
}

#nav a + a {
  margin-top: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view {
  width: 600px;
}
</style>
