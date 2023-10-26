<template>
  <div class="control-nav-headers">
    <div class="container-fluid">
      <div class="row">
        <div class="logo col-4">
          <router-link to="/" class="text-decoration-none text-white h2 text-bold"
            >សួស្តី
          </router-link>
        </div>
        <div class="search-inpute-box col-3 text-center">
          <input type="search" placeholder="search people..." />
          <div class="search-buttons">
            <a href="/" class="text-decoration-none"><i class="bi bi-search h3"></i></a>
          </div>
        </div>
        <div class="nav-menus col-5 text-end">
          <ul class="list-group list-group-horizontal text-end">
            <li class="list-group-item">
              <select class="form-select" aria-label="leng-changer">
                <option selected value="english">English</option>
                <option value="khmer">Khmer</option>
              </select>
            </li>
            <li class="list-group-item">
              <i class="bi bi-gear h3"></i>
            </li>
            <li class="list-group-item">
              <i class="bi bi-bell h3"></i>
            </li>
            <li class="list-group-item">
              <i class="bi bi-person-circle h3"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="control-left-menu-sides">
    <div class="menu-side">
        <ul class="list-inline"> 
            <li><router-link to="/" class="text-decoration-none"><i class="bi bi-chat-right-dots h1"></i></router-link></li>
            <li> <router-link to="/" class="text-decoration-none"><i class="bi bi-people h1"></i></router-link></li>
            <li> <router-link to="/" class="text-decoration-none"><i class="bi bi-megaphone h1"></i></router-link></li>
        </ul>
    </div>
  </div>
</template>
<style scoped>
.control-nav-headers {
  padding: 10px 0px;
  background-color: var(--color-dark);
}
.logo {
  font-family: koulen;
}
.search-inpute-box {
  background-color: var(--color-soft-dark);
  border-radius: 50px;
}
.search-inpute-box input {
  width: 90%;
  height: 100%;
  float: left;
  background-color: rgba(255, 255, 255, 0);
  outline: none;
  border: none;
  color: var(--color-white-text);
  font-size: 20px;
  padding-bottom: 5px;
  margin: 0px !important;
}
.search-inpute-box .search-buttons a {
  float: right;
  font-size: 20px;
  color: var(--color-white-text);
  padding-top: 2.5px;
}
.search-inpute-box .search-buttons a:hover {
  color: var(---color-light-blue);
}
.nav-menus ul {
  padding: 0px;
  margin: 0px;
  float: right;
}
.nav-menus ul li {
  background-color: #ff000000;
  border: none;
  color: var(--color-white-text);
  padding-top: 0px !important;
  padding-bottom: 0pc !important;
}
.nav-menus ul li select {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: var(--color-white-text);
  cursor: pointer;
  font-size: 20px;
  outline: none;
}
.nav-menus ul li select:focus {
  color: var(---color-light-blue);
  outline: none;
  cursor: pointer;
}
.nav-menus ul li i {
  cursor: pointer;
}
.nav-menus ul li:last-child {
  padding-right: 0px;
}
.nav-menus ul li i:hover {
  color: var(---color-light-blue);
}

/* Menu left side */
.control-left-menu-sides {
  height: auto;
  width: auto;
  position: fixed;
  left: 0px;
  top: 50%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: var(--color-dark);
  padding: 10px;
  transform: translateY(-50%);

}
.control-left-menu-sides ul li {
    padding: 10px 0px;
}
.control-left-menu-sides ul li a {
    color: var(--color-white-text);
}
</style>