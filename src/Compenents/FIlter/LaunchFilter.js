import React from "react";
import { createSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
function LaunchFilter(props) {
  const years = [2010, 2001, 2003, 2004];

  const FilterType = {
    LandingFilter: 1,
    LaunchingFilter: 2,
    YearFilter: 3,
  };
  let FilterValues = {
    land_success: null,
    launch_success: null,
    launch_year: null,
  };

  function OnFilterChange(event, filterType) {
    if (FilterType.LandingFilter === filterType)
      FilterValues.land_success = event.target.value;

    if (FilterType.LaunchingFilter === filterType)
      FilterValues.launch_success = event.target.value;

    if (FilterType.YearFilter === filterType)
      FilterValues.launch_year = event.target.value;

    const queryParameters = createSearchParams(FilterValues);
    const url = window.location.host + "//?" + queryParameters;
    window.location = url;
  }

  return (
    <div>
      <div>
        <label>Launch Year</label>
        <br />
        <table>
          <tbody>
            {years.map((year, index) => {
              return (
                <td>
                  <Button
                    key={index}
                    value={year}
                    onClick={(e) => OnFilterChange(e, FilterType.YearFilter)}
                  >
                    {year}
                  </Button>
                </td>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <label>Successfull Launch</label>
        <br />
        <Button
          value={true}
          onClick={(e) => OnFilterChange(e, FilterType.LaunchingFilter)}
        >
          True
        </Button>
        <Button
          value={false}
          onClick={(e) => OnFilterChange(e, FilterType.LaunchingFilter)}
        >
          False
        </Button>
      </div>
      <div>
        <label>Successfull Landing</label>
        <br />
        <Button
          value={true}
          onClick={(e) => OnFilterChange(e, FilterType.LandingFilter)}
        >
          True
        </Button>
        <Button
          value={false}
          onClick={(e) => OnFilterChange(e, FilterType.LandingFilter)}
        >
          False
        </Button>
      </div>
    </div>
  );
}

export default LaunchFilter;
