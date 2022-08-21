import React, { Component } from "react";

const SideBar = () => {
    return(
    <nav class="sidebar">
      <div class="sidebar-header">
          <a href="#" class="sidebar-brand">
              MT<span>LTD</span>
          </a>
          <div class="sidebar-toggler not-active">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </div>
      <div class="sidebar-body">
          <ul class="nav">
              <li class="nav-item nav-category">Employee</li>
              <li class="nav-item">
                  <a class="nav-link" href="#">
                      <i class="link-icon" data-feather="user-plus"></i>
                      <span class="link-title">Add Customer</span>
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">
                      <i class="link-icon" data-feather="list"></i>
                      <span class="link-title">Customer list</span>
                  </a>
              </li>
          </ul>
      </div>
  </nav>
    )
}
export default SideBar;